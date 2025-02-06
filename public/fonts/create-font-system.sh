#!/bin/bash

# Hämta mappen där bashfilen finns
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"

# Mappen där fontfilerna finns (samma som där skriptet finns)
FOLDER_PATH="$SCRIPT_DIR"

# Utmatningsfilen där CSS-skoden kommer att sparas
OUTPUT_CSS="$SCRIPT_DIR/font-system.css"

# Rensa tidigare innehåll i utmatningsfilen
echo "" > "$OUTPUT_CSS"

# Loopa genom alla filer i mappen och skapa font-familjer
for FILE in "$FOLDER_PATH"/*; do
    # Kontrollera om filen är en riktig fil och har ett relevant filformat (t.ex. .ttf, .otf)
    if [[ -f "$FILE" && ( "$FILE" == *.ttf || "$FILE" == *.otf ) ]]; then
        # Extrahera filnamnet utan sökvägen
        FILENAME=$(basename "$FILE")
        
        # Skapa en unik fontfamilj baserat på filnamnet (utan filändelse)
        FONT_NAME="${FILENAME%.*}"
        
        # Lägg till CSS-regler för fonten i utmatningsfilen
        echo "@font-face {" >> "$OUTPUT_CSS"
        echo "  font-family: '$FONT_NAME';" >> "$OUTPUT_CSS"
        echo "  src: url('$FILE') format('truetype');" >> "$OUTPUT_CSS"
        echo "}" >> "$OUTPUT_CSS"
        echo "" >> "$OUTPUT_CSS"
    fi
done

echo "Fontsystemet har skapats i '$OUTPUT_CSS'"
