/**
 * @history
 * 16th Mar 2022(ver0)
 */
// 1. node 명령어에 들어가는 인자 접근하기(폴더명 받기 위해) - process.argv

// 2. 명령어로 받은 폴더명을 가지고 해당 폴더에 접근해 video, captured, duplicated 폴더 생성

// 3. 해당 폴더의 파일을 순회하면서 확장자를 가지고 파일을 분류하고 적절한 폴더로 옮기기
const { argv } = require('process');
const fs = require('fs').promises;
const path = require('path');

const [currentPath, execFile, targetFolder, ...rest] = argv;

const folders = ['video', 'captured', 'duplicated'];

fs.readdir(`./${targetFolder}`)
	.then((data) => {
		// const onlyFiles = [];

		for (let newFolder of folders) {
			if (!data.includes(newFolder)) {
				fs.mkdir(`./${targetFolder}/${newFolder}`).catch(console.error);
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

			let currentPath = `${__dirname}/${targetFolder}/${file}`;
			let destinationPath = '';

			if (ext === '.mov' || ext === '.mp4') {
				destinationPath = `${__dirname}/${targetFolder}/video/${file}`;
				fs.rename(currentPath, destinationPath).catch(console.error);
			}
			if (ext === '.png' || ext === '.aae') {
				destinationPath = `${__dirname}/${targetFolder}/captured/${file}`;
				fs.rename(currentPath, destinationPath).catch(console.error);
			}
			if (ext === '.jpg') {
				if (file.includes('E')) {
					const originalPicName = file.replace('E', '');

					if (files.includes(originalPicName)) {
						currentPath = `${__dirname}/${targetFolder}/${originalPicName}`;
						destinationPath = `${__dirname}/${targetFolder}/duplicated/${originalPicName}`;

						fs.rename(currentPath, destinationPath).catch(console.error);
					}
				}
			}
		}
	})
	.catch(console.error);
