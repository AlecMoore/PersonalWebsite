from PIL import Image, ImageDraw, ImageFont

# Define colors
background_color = "#10233b"
text_color = "#23c8a1"

# Create an image with a specific background color
size = (64, 64)  # Standard favicon size
image = Image.new('RGBA', size, background_color)

# Initialize drawing context
draw = ImageDraw.Draw(image)

# Load the "Dubai Light" font
# Make sure the font file path is correct
font_path = "D:/Projects/VS/my-portfolio/public/Dubai-Light.ttf"  # Update this path if necessary
font_size = 43  # Adjust font size for bigger text
font = ImageFont.truetype(font_path, font_size)

# Define the text
text = "AM"

# Get text size using textbbox
text_bbox = draw.textbbox((0, 0), text, font=font)  # Get the bounding box
text_width = text_bbox[2] - text_bbox[0]  # width = right - left
text_height = text_bbox[3] - text_bbox[1]  # height = bottom - top

# Calculate text position (centered)
text_position = (
    (size[0] - text_width) // 2,
    (size[1] - text_height) // 2
)

# Optional: Add some padding if needed to make the text appear more central
padding = -20  # Adjust padding as needed
text_position = (
    text_position[0],
    text_position[1] + padding
)

# Add text to image
draw.text(text_position, text, font=font, fill=text_color)

# Save as favicon (.ico format)
image.save("favicon.ico")