A grid gallery 

## Images
Here's a reliable way to make sure we serve balance high-quality, efficient file size images.
  1. Install [ImageMagick](http://www.imagemagick.org/script/index.php)
  2. Ensure it's on your command line `magick -version`
  3. CD into a folder with a bunch of images, and add an output folder (in the folowing example, `mkdir processed`):
  `magick convert *.jpg -sampling-factor 4:2:0 -strip -quality 85 -interlace JPEG -colorspace RGB -set filename:f %t processed/%[filename:f].jpg`
  4. That command will grab all jpgs (`*.jpg`), and put the new processed files in a folder called (`processed`) with the same name
