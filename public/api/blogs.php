<?php
require_once __DIR__ . '/config.php';

header('Content-Type: application/json');

$method = $_SERVER['REQUEST_METHOD'];

function slugify($text) {
    $text = preg_replace('~[^\pL\d]+~u', '-', $text);
    $text = iconv('utf-8', 'us-ascii//TRANSLIT', $text);
    $text = preg_replace('~[^-\w]+~', '', $text);
    $text = trim($text, '-');
    $text = preg_replace('~-+~', '-', $text);
    $text = strtolower($text);
    return empty($text) ? 'blog-' . time() : $text;
}

if ($method === 'GET') {
    $id = isset($_GET['id']) ? $_GET['id'] : null;
    $slug = isset($_GET['slug']) ? $_GET['slug'] : null;

    if ($id) {
        $stmt = $pdo->prepare("SELECT * FROM blogs WHERE id = ?");
        $stmt->execute([$id]);
        $blog = $stmt->fetch();
        if ($blog) {
            echo json_encode(['success' => true, 'data' => $blog]);
        } else {
            http_response_code(404);
            echo json_encode(['success' => false, 'message' => 'Artikel tidak ditemukan']);
        }
    } elseif ($slug) {
        $stmt = $pdo->prepare("SELECT * FROM blogs WHERE slug = ?");
        $stmt->execute([$slug]);
        $blog = $stmt->fetch();
        if ($blog) {
            echo json_encode(['success' => true, 'data' => $blog]);
        } else {
            http_response_code(404);
            echo json_encode(['success' => false, 'message' => 'Artikel tidak ditemukan']);
        }
    } else {
        $limit = isset($_GET['limit']) ? (int)$_GET['limit'] : null;
        $sql = "SELECT * FROM blogs WHERE status = 'published' ORDER BY id DESC";
        if ($limit) {
            $sql .= " LIMIT " . $limit;
        }
        $stmt = $pdo->query($sql);
        $blogs = $stmt->fetchAll();
        echo json_encode(['success' => true, 'data' => $blogs]);
    }
} elseif ($method === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);
    $title = $input['title'] ?? '';
    $content = $input['content'] ?? '';
    $excerpt = $input['excerpt'] ?? substr(strip_tags($content), 0, 160) . '...';
    $author = $input['author'] ?? 'Fasel Consulting';
    $date = $input['date'] ?? date('d F Y');
    $thumb = $input['thumb'] ?? '1.jpg';
    $tags = $input['tags'] ?? 'Training, Consulting';
    $status = $input['status'] ?? 'published';

    if (empty($title) || empty($content)) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Judul dan konten wajib diisi']);
        exit();
    }

    $slug = slugify($title) . '-' . substr(time(), -4);

    $stmt = $pdo->prepare("INSERT INTO blogs (title, slug, author, date, thumb, thumb_full, excerpt, content, tags, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->execute([$title, $slug, $author, $date, $thumb, $thumb, $excerpt, $content, $tags, $status]);

    echo json_encode(['success' => true, 'message' => 'Artikel berhasil disimpan', 'id' => $pdo->lastInsertId(), 'slug' => $slug]);
} elseif ($method === 'DELETE') {
    $id = $_GET['id'] ?? null;
    if ($id) {
        $stmt = $pdo->prepare("DELETE FROM blogs WHERE id = ?");
        $stmt->execute([$id]);
        echo json_encode(['success' => true, 'message' => 'Artikel berhasil dihapus']);
    } else {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'ID wajib disertakan']);
    }
}
?>
