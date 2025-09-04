// Google Driveで画像を公開する手順:
// 1. Google Driveに画像をアップロードします。
// 2. アップロードした画像を右クリックし、「共有」を選択します。
// 3. 「一般的なアクセス」を「リンクを知っている全員」に変更します。
// 4. 「リンクをコピー」をクリックします。
// 5. コピーしたリンクから、ファイルのIDを抽出します。
//    例: https://drive.google.com/file/d/ファイルID/view?usp=drive_link
// 6. 抽出したファイルIDを以下の配列に追加します。

// ここに表示したいウェブ上の画像URLを追加してください
// 例：'https://example.com/images/photo.jpg'
const imageUrls = [
  'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517409549320-b384666f7af7?w=600&auto=format&fit=crop'
];

document.addEventListener('DOMContentLoaded', () => {
  const imageGallery = document.getElementById('image-gallery');

  if (imageUrls.length === 0) {
    imageGallery.innerHTML = `
      <div class="w-full text-center p-8 text-gray-500">
        表示する画像がありません。<br>
        'script.js'ファイルに画像URLを追加してください。
      </div>
    `;
    return;
  }

  imageGallery.innerHTML = ''; // ローディング表示をクリア

  imageUrls.forEach(url => {
    const imgElement = document.createElement('img');
    imgElement.src = url;
    imgElement.alt = 'ウェブ画像';
    imgElement.className = 'w-full h-full object-cover rounded-lg shadow-md';

    const divElement = document.createElement('div');
    divElement.className = 'w-full h-72';
    divElement.appendChild(imgElement);

    imageGallery.appendChild(divElement);
  });
});
