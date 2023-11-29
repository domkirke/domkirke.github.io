import argparse
import os, torch, torchvision, tqdm
import torchvision.transforms.functional as F
from os.path import join

parser = argparse.ArgumentParser()
parser.add_argument('input_folder', type=str)
parser.add_argument('-o', '--output_folder', type=str, default=None)
parser.add_argument('-s', '--target_size',  nargs=2, type=int, default=[720, 1024])
args = parser.parse_args()

folder = join(args.input_folder, "images")
target_folder = args.output_folder or os.path.abspath(join(folder, "..", "thumbnails"))
if not os.path.exists(target_folder):
    os.makedirs(target_folder)
target_size = args.target_size

exts = ['.jpg', '.jpeg', '.png', '.tif', '.tiff']
files = list(filter(lambda x: os.path.splitext(x)[1].lower() in exts, os.listdir(folder)))

print(f'Found {len(files)} files.')
for img in tqdm.tqdm(files, total=len(files), desc="Exporting..."):
    transform = torchvision.transforms.CenterCrop(target_size)
    ext = os.path.splitext(img)[1]
    a = torchvision.io.read_image(join(folder, img))
    if a.shape[1] > a.shape[2]:
        a = F.resize(a, (target_size[0]))
        a = F.center_crop(a, target_size)
    elif a.shape[1] <= a.shape[2]:
        a = F.resize(a, (target_size[1]))
        a = F.center_crop(a, target_size) 
    if a.size(0)>3:
        a = a[:3]
    img_name = os.path.splitext(img)[0]
    torchvision.io.write_jpeg(a, join(target_folder, img_name+'.jpg'))


