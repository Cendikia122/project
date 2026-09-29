<?php
require_once __DIR__ . '/config.php';

header('Content-Type: application/json');

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {
    $id = isset($_GET['id']) ? $_GET['id'] : null;

    if ($id) {
        $stmt = $pdo->prepare("SELECT * FROM events WHERE id = ?");
        $stmt->execute([$id]);
        $event = $stmt->fetch();
        if ($event) {
            echo json_encode(['success' => true, 'data' => $event]);
        } else {
            http_response_code(404);
            echo json_encode(['success' => false, 'message' => 'Event tidak ditemukan']);
        }
    } else {
        $limit = isset($_GET['limit']) ? (int)$_GET['limit'] : null;
        $sql = "SELECT * FROM events WHERE status = 'active' ORDER BY id DESC";
        if ($limit) {
            $sql .= " LIMIT " . $limit;
        }
        $stmt = $pdo->query($sql);
        $events = $stmt->fetchAll();
        echo json_encode(['success' => true, 'data' => $events]);
    }
} elseif ($method === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);
    $title = $input['title'] ?? '';
    $tag = $input['tag'] ?? 'Experiential Learning';
    $thumb = $input['thumb'] ?? 'faselevent1.jpg';
    $date = $input['date'] ?? 'Pendaftaran Terbuka';
    $location = $input['location'] ?? 'Bogor, Jawa Barat';
    $short_desc = $input['short_desc'] ?? '';
    $description = $input['description'] ?? "<p>$short_desc</p>";
    $btn_text = $input['btn_text'] ?? 'Daftar Sekarang';
    $btn_link = $input['btn_link'] ?? 'https://wa.me/6281298319944';
    $status = $input['status'] ?? 'active';

    if (empty($title)) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Judul event wajib diisi']);
        exit();
    }

    $stmt = $pdo->prepare("INSERT INTO events (title, tag, thumb, date, location, short_desc, description, btn_text, btn_link, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->execute([$title, $tag, $thumb, $date, $location, $short_desc, $description, $btn_text, $btn_link, $status]);

    echo json_encode(['success' => true, 'message' => 'Event berhasil ditambahkan', 'id' => $pdo->lastInsertId()]);
} elseif ($method === 'DELETE') {
    $id = $_GET['id'] ?? null;
    if ($id) {
        $stmt = $pdo->prepare("DELETE FROM events WHERE id = ?");
        $stmt->execute([$id]);
        echo json_encode(['success' => true, 'message' => 'Event berhasil dihapus']);
    } else {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'ID wajib disertakan']);
    }
}
?>
