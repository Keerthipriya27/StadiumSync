from app import create_app


def test_index_page_loads():
    app = create_app()
    client = app.test_client()

    response = client.get('/')

    assert response.status_code == 200
    assert b'Promptwars' in response.data


def test_health_endpoint():
    app = create_app()
    client = app.test_client()

    response = client.get('/health')

    assert response.status_code == 200
    assert response.json == {'status': 'ok'}


def test_security_headers_present():
    app = create_app()
    client = app.test_client()

    response = client.get('/')

    assert response.headers['X-Content-Type-Options'] == 'nosniff'
    assert response.headers['X-Frame-Options'] == 'DENY'
    assert 'default-src' in response.headers['Content-Security-Policy']
