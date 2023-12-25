import os
import re

folder_path = '/home/chrx/Dropbox/Site/icon/content/blog/'

def update_weight(file_path):
    with open(file_path, 'r') as file:
        content = file.read()

    updated_content = re.sub(r'weight:\s*10', 'weight: 3', content)

    with open(file_path, 'w') as file:
        file.write(updated_content)

def update_weights_in_folder(folder_path):
    for filename in os.listdir(folder_path):
        if filename.endswith('.md'):
            file_path = os.path.join(folder_path, filename)
            update_weight(file_path)

if __name__ == "__main__":
    update_weights_in_folder(folder_path)
