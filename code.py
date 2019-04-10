import pytesseract
from PIL import Image


image = Image.open('/Users/taosang1992/Desktop/code.png')
# 识别验证码
optCode = pytesseract.image_to_string(image)
# 打印出验证码
print("验证码：", optCode)
