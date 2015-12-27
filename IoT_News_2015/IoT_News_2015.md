# Raspberry Pi Zero
- 11/25発表
- 特徴
    - 安い(5ドル)
    - 小さい(薄い)
    - LANポート無し
        - USBにWiFiドングルかSIMドングルを挿して通信
        - セットアップ時にはUSBハブが無いとつらい
    - カメラモジュール使えない
    - GPIOピン未実装
        - 必要な分だけハンダ付け
        - USBシリアル変換ケーブル
    - micro USBポートが2つあるが1つは電源用。

## 買ってみた

- [Raspberry Pi Zero - Pimoroni](https://shop.pimoroni.com/products/raspberry-pi-zero)で12/14に発注
    - Pi Zero + Adaptors + Pibow Zero Case
    - £9.58 + Shipping £4.00 = £13.58(￥2602)
- 12/27到着

## セットアップ

- USBハブを持っている時
    - USBハブを挿して、キーボード用のUSBドングルと、WiFiまたはSIMドングルを接続
- USB-Ethernetアダプタを持っている時
    - USB-Ethernetアダプタを刺したRaspberry Pi ZeroをLANに接続
    - MacもしくはiTunes(Bonjour)インストール済みWindowsから`ssh -l pi raspberrypi.local`
- 別のRaspberry Piを持っている時
    - 別のRaspberry PiでセットアップしたmicroSDカードを差し替え

## 比較

||Raspberry Pi 2 Model B|Raspberry Pi 1 Model A+|Raspberry Pi Zero|
|:--|:--|:--|:--|
|Price|$35|$20|$5|
|Audio|Multi-Channel HD Audio over HDMI, Stereo from 3.5 mm jack|Multi-Channel HD Audio over HDMI, Stereo from 3.5 mm jack|Multi-Channel HD Audio over HDMI|
|CPU|900 MHz Low Power ARMv7 Quad Core Processor|700 MHz Low Power ARM1176JZ-F Applications Processor|1 GHz Low Power ARM1176JZ-F Applications Processor|
|Dimensions|85mm x 56mm x 21mm|65mm x 56mm x 12mm|65mm x 30mm x 5mm|
|Ethernet|1x 10/100mb Ethernet RJ45 Jack|None|None|
|GPIO|40|40|40 pin (unpopulated)|
|Other Connectivity|1x CSI-2 for Raspberry Pi camera modules, 1x DSI for Raspberry Pi displays|1x CSI-2 for Raspberry Pi camera modules, 1x DSI for Raspberry Pi displays|None|
|Power|5V micro USB input. 800mA rating|5V micro USB input. 200mA rating|5V micro USB input. 160mA rating|
|RAM|1GB SDRAM @ 450 MHz|256 MB SDRAM @ 400 MHz|512 MB SDRAM @ 400 MHz|
|USB 2.0|4x USB Ports|1x USB Port|1x Micro USB Port|
|Video Connections|HDMI, Composite RCA (shared with audio jack)|HDMI, Composite RCA (shared with audio jack)|HDMI|
# SORACOM
# ESP8266
# AWS IoT
# MQTT
# Node Red


myThings
Windows10 IoT Core
milkcocoa


IoT p
[月額400円以下でIoT用のモバイル通信を実現するArduino互換モジュール「Spark Electron」 - GIGAZINE](http://gigazine.net/news/20150326-spark-electron/)


試作から量産まで幅広くカバーしたIoT開発モジュール「BlueNinja」発表 | Cerevoからのお知らせ https://info-blog.cerevo.com/2015/07/28/1219/

ASCII.jp：さくらインターネットがIoT参入を電撃公表！ http://ascii.jp/elem/000/001/097/1097584/

test
test2
test3