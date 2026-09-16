const fs = require('fs');
// fs.writeFile(
//     'sample.txt','Welcome to Full Stack Dev workshop - 2',(err)=>{
//         if(err){
//             console.log('Error creating File',err);
//         }else{
//             console.log('file created successfully');
//         }
//     }
// )

// fs.readFile('sample.txt','utf8',(err,data)=>{
//     if(err){
//         console.log('ERROR READING FILE',err);
//         return;
//     }else{
//         console.log('File Content : ');
//         console.log(data);
//     }
// })

// fs.appendFile('sample.txt','\nSemester : 3',(err)=>{
//     if(err){
//         console.log('Error Updating file',err);
//     }else{
//         console.log('\n File updated successfully');
//     }
// })

// fs.writeFile(
//     'example.txt','Welcome to Full Stack Dev workshop - 2',(err)=>{
//         if(err){
//             console.log('Error creating File',err);
//         }else{
//             console.log('file created successfully');
//         }
//     }
// )

fs.unlink('example.txt',(err)=>{
    if(err){
        console.error('Error deleting file:',err);
    }else{
        console.log('\n4.file deleted successfully!')
    }
})

