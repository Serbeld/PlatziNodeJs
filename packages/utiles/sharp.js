const sharp = require('sharp');

sharp('original_image_js.png')
.resize(40)
.toFile('resized.png')