#!/usr/bin/env bash

set -euo pipefail

ROOT="./prismatic/public"
QUALITY=90
DELETE_ORIGINALS=false

usage() {
    cat <<'EOF'
Usage:
  ./scripts/convert-webp.sh [directory] [options]

Options:
  -q, --quality <1-100>   WebP quality. Default: 90
  -d, --delete            Delete originals after successful conversion
  -h, --help              Show this help message

Examples:
  ./scripts/convert-webp.sh
  ./scripts/convert-webp.sh ./prismatic/public/images
  ./scripts/convert-webp.sh ./prismatic/public -q 85
  ./scripts/convert-webp.sh ./prismatic/public --delete
EOF
}

while [[ $# -gt 0 ]]; do
    case "$1" in
        -q|--quality)
            if [[ $# -lt 2 ]]; then
                echo "Error: --quality requires a value." >&2
                exit 1
            fi

            QUALITY="$2"
            shift 2
            ;;
        -d|--delete)
            DELETE_ORIGINALS=true
            shift
            ;;
        -h|--help)
            usage
            exit 0
            ;;
        -*)
            echo "Error: unknown option: $1" >&2
            usage
            exit 1
            ;;
        *)
            ROOT="$1"
            shift
            ;;
    esac
done

if ! [[ "$QUALITY" =~ ^[0-9]+$ ]] || (( QUALITY < 1 || QUALITY > 100 )); then
    echo "Error: quality must be an integer between 1 and 100." >&2
    exit 1
fi

if [[ ! -d "$ROOT" ]]; then
    echo "Error: directory does not exist: $ROOT" >&2
    exit 1
fi

if ! command -v magick >/dev/null 2>&1; then
    echo "Error: ImageMagick is not installed." >&2
    echo "Install it on Arch with:" >&2
    echo "  sudo pacman -S imagemagick" >&2
    exit 1
fi

converted=0
skipped=0
failed=0

should_skip() {
    local filename
    filename="$(basename "$1")"

    case "$filename" in
        favicon.*|apple-touch-icon.*|android-chrome-*.png|mstile-*.png)
            return 0
            ;;
        *)
            return 1
            ;;
    esac
}

echo "Searching: $ROOT"
echo "Quality:   $QUALITY"
echo "Delete:    $DELETE_ORIGINALS"
echo

while IFS= read -r -d '' file; do
    if should_skip "$file"; then
        echo "Skipping protected asset: $file"
        ((skipped += 1))
        continue
    fi

    output="${file%.*}.webp"

    if [[ -f "$output" ]]; then
        echo "Skipping existing file: $output"
        ((skipped += 1))
        continue
    fi

    echo "Converting: $file"
    echo "        to: $output"

    if magick "$file" \
        -auto-orient \
        -strip \
        -define webp:method=6 \
        -quality "$QUALITY" \
        "$output"; then

        ((converted += 1))

        if [[ "$DELETE_ORIGINALS" == true ]]; then
            rm -- "$file"
            echo "Deleted original: $file"
        fi
    else
        echo "Failed to convert: $file" >&2
        rm -f -- "$output"
        ((failed += 1))
    fi

    echo
done < <(
    find "$ROOT" -type f \
        \( -iname "*.png" -o -iname "*.jpg" -o -iname "*.jpeg" \) \
        -print0
)

echo "Finished."
echo "Converted: $converted"
echo "Skipped:   $skipped"
echo "Failed:    $failed"

if (( failed > 0 )); then
    exit 1
fi