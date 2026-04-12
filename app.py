import os

from flask import Flask, jsonify, render_template


def create_app() -> Flask:
    app = Flask(__name__)

    @app.after_request
    def set_security_headers(response):
        response.headers['X-Content-Type-Options'] = 'nosniff'
        response.headers['X-Frame-Options'] = 'DENY'
        response.headers['Referrer-Policy'] = 'strict-origin-when-cross-origin'
        response.headers['Permissions-Policy'] = 'geolocation=(), microphone=(), camera=()'
        response.headers['Content-Security-Policy'] = (
            "default-src 'self'; "
            "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; "
            "font-src 'self' https://fonts.gstatic.com; "
            "script-src 'self'; "
            "img-src 'self' data:; "
            "connect-src 'self';"
        )
        return response

    @app.get('/')
    def index():
        return render_template('index.html')

    @app.get('/health')
    def health():
        return jsonify({'status': 'ok'})

    return app


app = create_app()


if __name__ == '__main__':
    debug_mode = os.getenv('FLASK_DEBUG', '0') == '1'
    port = int(os.getenv('PORT', '5000'))
    app.run(host='0.0.0.0', port=port, debug=debug_mode)
