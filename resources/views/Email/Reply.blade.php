<!DOCTYPE html>
<html lang="id">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ $reply['title'] ?? 'Balasan Pesan' }}</title>

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

        .quote {
            background: #f9fafb;
            border-left: 4px solid #e5e7eb;
            padding: 12px;
            margin-top: 12px;
            font-size: 13px;
        }
    </style>
</head>

<body>

    <div class="container">
        <h2>{{ $reply['title'] }}</h2>

        <p>Halo <strong>{{ $reply['name'] ?? 'Pelanggan' }}</strong>,</p>

        <p>
            Terima kasih telah menghubungi kami.
        </p>

        <div class="divider"></div>

        <p>
            {!! nl2br(e($reply['reply'])) !!}
        </p>

        <div class="divider"></div>

        <p>
            Jika masih ada pertanyaan, jangan ragu untuk membalas email ini.
        </p>

        <p>
            Hormat kami,<br>
            <strong>{{ $reply['admin_name'] ?? 'Admin' }}</strong><br>
            Customer Service, Zinc Creative Studio
        </p>

        <div class="footer">
            Email ini dikirim secara otomatis. Mohon tidak membagikan informasi sensitif melalui email.
        </div>
    </div>

</body>

</html>