/**
 * @history
 * 16th Mar 2022(ver0) : 최초에 혼자 시도해서 만듦.
 * 16th Mar 2022(ver1) : 타겟 폴더명 입력에 문제가 있는 경우 에러 핸들링 처리 추가 및 기타 수정.
 */

// 1. node 명령어에 들어가는 인자 접근하기(폴더명 받기 위해) - process.argv

// 2. 명령어로 받은 폴더명을 가지고 해당 폴더에 접근해 video, captured, duplicated 폴더 생성

// 3. 해당 폴더의 파일을 순회하면서 확장자를 가지고 파일을 분류하고 적절한 폴더로 옮기기
const { argv } = require('process');
const fs = require('fs');
const fs_promises = require('fs').promises;
const os = require('os');
const path = require('path');

let [currentPath, execFile, targetFolder, ...rest] = argv;

const folders = ['video', 'captured', 'duplicated'];

targetFolder = targetFolder || '';
const workingDir = path.join(os.homedir(), 'Pictures', targetFolder);

// 타겟 폴더를 아예 입력하지 않거나 입력했는데 존재하지 않는 경로일 경우
if (!targetFolder || !fs.existsSync(workingDir)) {
	console.error('Please enter folder name in DREAM_CODING_NODE/3-script!!!');
	return;
}

fs_promises
	.readdir(workingDir)
	.then((data) => {
		// const onlyFiles = [];

		for (let newFolder of folders) {
			if (!data.includes(newFolder)) {
				fs_promises.mkdir(`${workingDir}/${newFolder}`).catch(console.error);
			}
		}

		// for (let datum of data) {
		// 	fs.stat(`${__dirname}/${targetFolder}/${datum}`).then((res) => {
		// 		if (!res.isDirectory()) onlyFiles.push(datum);
		// 	});
		// }

		return data;
	})
	.then((files) => {
		console.log(files);
		// 모든 파일 순회하면서 분류 그리고 적절한 폴더로 옮기기
		for (let file of files) {
			const ext = path.extname(file);

			let currentPath = path.join(workingDir, file);
			let destinationPath = '';

			if (ext === '.mov' || ext === '.mp4') {
				destinationPath = path.join(workingDir, 'video', file);
				fs_promises.rename(currentPath, destinationPath).catch(console.error);
			}
			if (ext === '.png' || ext === '.aae') {
				destinationPath = path.join(workingDir, 'captured', file);
				fs_promises.rename(currentPath, destinationPath).catch(console.error);
			}
			if (ext === '.jpg') {
				if (file.includes('E')) {
					const originalPicName = file.replace('E', '');

					if (files.includes(originalPicName)) {
						currentPath = path.join(workingDir, originalPicName);
						destinationPath = path.join(workingDir, 'duplicated', originalPicName);

						fs_promises.rename(currentPath, destinationPath).catch(console.error);
					}
				}
			}
		}
	})
	.catch(console.error);
