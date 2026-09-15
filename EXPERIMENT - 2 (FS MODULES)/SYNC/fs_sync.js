const fs=require('fs');

fs.writeFileSync('example.txt' , 'This is experiment 2 in FSD workshop','utf8');
fs.writeFileSync('student.txt' , 'This is experiment 2 in FSD workshop','utf8');

console.log('create file run successfully');

const data =  fs.readFileSync('example.txt','utf8');

console.log('file content is : ',data);

fs.appendFileSync('example.txt','\n This is a new line');
console.log('updated content in example.txt');

fs.unlinkSync('student.txt');
console.log('student file is deleted');

fs.mkdirSync('STUDENT');
console.log('File created Successfully');

// fs.rmdirSync('STUDENT');
// console.log('File deleted Successfully');

if(fs.existsSync('example.txt')){
    console.log('file exists');
}else{
    console.log('file doesnot exists');
}