document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const connectionStatusText = document.getElementById('connectionStatusText');
    const connectionImage = document.getElementById('connectionImage');

    // 接続状態をシミュレートするための関数
    function simulateConnection(isConnected) {
        if (isConnected) {
            // 接続済みの状態に切り替え
            body.classList.remove('disconnected-state');
            body.classList.add('connected-state');
            connectionStatusText.textContent = 'PCに接続しました！';
            connectionStatusText.style.color = 'var(--green-status)'; // CSS変数を使用
            // CSSで img/connected.png に切り替わるように設定済み
        } else {
            // 未接続の状態に切り替え
            body.classList.remove('connected-state');
            body.classList.add('disconnected-state');
            connectionStatusText.textContent = 'PCに接続してください';
            connectionStatusText.style.color = 'var(--red-status)'; // CSS変数を使用
            // CSSで img/noConnect.png に切り替わるように設定済み
        }
    }

    // ページロード時は未接続状態
    simulateConnection(false);

    // 例: 5秒後に接続済み状態に切り替える（開発用シミュレーション）
    setTimeout(() => {
        simulateConnection(true);
        console.log('接続状態を「接続済み」に切り替えました。');
    }, 5000);

    // 例: さらに10秒後に未接続状態に戻す
    setTimeout(() => {
        simulateConnection(false);
        console.log('接続状態を「未接続」に戻しました。');
    }, 15000);
});
