// Google Driveで画像を公開する手順:
// 1. Google Driveに画像をアップロードします。
// 2. アップロードした画像を右クリックし、「共有」を選択します。
// 3. 「一般的なアクセス」を「リンクを知っている全員」に変更します。
// 4. 「リンクをコピー」をクリックします。
// 5. コピーしたリンクから、ファイルのIDを抽出します。
//    例: https://drive.google.com/file/d/ファイルID/view?usp=drive_link
// 6. 抽出したファイルIDを以下の配列に追加します。

const imageIds = [
  // ここにGoogle Driveの画像ファイルIDを追加してください
  // 例: '1aBcDeFgHiJkLmNoPqRsTuVwXyZ'
  '1JAOGkVfD3DCpfTXJF4J7aVEeDdsIr6KM'
];

document.addEventListener('DOMContentLoaded', () => {
  const imageGallery = document.getElementById('image-gallery');

  if (imageIds.length === 0) {
    imageGallery.innerHTML = `
      <div class="w-full text-center p-8 text-gray-500">
        表示する画像がありません。<br>
        'script.js'ファイルにGoogle DriveのファイルIDを追加してください。
      </div>
    `;
    return;
  }

  imageGallery.innerHTML = ''; // ローディング表示をクリア

  imageIds.forEach(id => {
    // Google Driveの画像を直接表示するためのURL
    const imageUrl = `https://drive.google.com/uc?export=view&id=${id}`;

    const imgElement = document.createElement('img');
    imgElement.src = imageUrl;
    imgElement.alt = 'Google Drive Image';
    imgElement.className = 'w-full h-full object-cover rounded-lg shadow-md';

    const divElement = document.createElement('div');
    divElement.className = 'w-full h-72';
    divElement.appendChild(imgElement);

    imageGallery.appendChild(divElement);
  });
});
