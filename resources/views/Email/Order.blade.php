<!DOCTYPE html>
<html lang="id">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Konfirmasi Pesanan - {{ $order['order_number'] }}</title>
    <style>
        body {
            font-family: Arial, Helvetica, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }

        .container {
            max-width: 600px;
            margin: 30px auto;
            background: #ffffff;
            padding: 24px;
            border-radius: 6px;
        }

        h2 {
            margin-top: 0;
            color: #111827;
        }

        p {
            color: #374151;
            line-height: 1.6;
            margin: 8px 0;
        }

        .divider {
            margin: 20px 0;
            border-top: 1px solid #e5e7eb;
        }

        .footer {
            margin-top: 30px;
            font-size: 12px;
            color: #6b7280;
        }

        .order-box {
            background: #f9fafb;
            border-left: 4px solid #e5e7eb;
            padding: 12px;
            margin-top: 12px;
            font-size: 13px;
        }

        .order-box p {
            margin: 6px 0;
        }
    </style>
</head>

<body>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
        <tr>
            <td>
                <div class="container">
                    <h2>Konfirmasi Pesanan</h2>

                    <p>Halo <strong>{{ $order['full_name'] }}</strong>,</p>

                    <p>Terima kasih telah melakukan pemesanan di Zinc Creative Studio. Pesanan Anda telah kami terima dengan rincian sebagai berikut:</p>

                    <div class="divider"></div>

                    <div class="order-box">
                        <p><strong>Nomor Order:</strong> {{ $order['order_number'] }}</p>
                        <p><strong>Nama Pemesan:</strong> {{ $order['full_name'] }}</p>
                        <p><strong>Nama Produk:</strong> {{ $order['product']['name'] }}</p>
                        <p><strong>Jumlah:</strong> {{ $order['quantity'] }}</p>
                        <p><strong>Total estimasi produk:</strong> Rp {{ $order['total_estimate'] }}</p>
                    </div>

                    <div class="divider"></div>

                    <p>Sebelum kami melanjutkan ke proses berikutnya, kami memerlukan konfirmasi dari Anda terkait:</p>

                    <p><strong>1. Alamat pengiriman lengkap</strong><br>(Nama penerima, alamat lengkap, kecamatan/kota, dan kode pos)</p>

                    <p><strong>2. Kebutuhan desain</strong><br>Apakah Anda ingin menggunakan:<br>• Desain custom dari tim kami, atau<br>• Desain sendiri / tidak memerlukan desain custom</p>

                    <div class="divider"></div>

                    <p>Untuk memantau status pesanan Anda, silakan kunjungi halaman berikut:<br><a href="{{ $tracking_url }}">{{ $tracking_url }}</a></p>

                    <div class="divider"></div>

                    <p>Setelah kami menerima konfirmasi tersebut, kami akan melakukan perhitungan ongkos kirim dan menghubungi Anda kembali.</p>

                    <p>Terima kasih atas kepercayaan Anda kepada Zinc Creative Studio. Kami menunggu konfirmasi dari Anda.</p>

                    <p>Hormat kami,<br><strong>Zinc Creative Studio</strong><br>zinccreativestudio@zinc.com</p>

                    <div class="footer">Email ini dikirim secara otomatis sebagai konfirmasi pesanan Anda.</div>
                </div>
            </td>
        </tr>
    </table>
</body>

</html>