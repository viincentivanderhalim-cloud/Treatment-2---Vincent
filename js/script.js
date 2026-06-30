const form = document.getElementById("dataForm");

if(form){

form.addEventListener("submit", function(e){

e.preventDefault();

const data = {
    nama: document.getElementById("nama").value,
    nim: document.getElementById("nim").value,
    layanan: document.getElementById("layanan").value,
    keterangan: document.getElementById("keterangan").value
};

let daftar = JSON.parse(localStorage.getItem("dataPengguna")) || [];

daftar.push(data);

localStorage.setItem("dataPengguna", JSON.stringify(daftar));

alert("Data berhasil disimpan");

form.reset();

});

}

const table = document.getElementById("tableData");

if(table){

let daftar = JSON.parse(localStorage.getItem("dataPengguna")) || [];

daftar.forEach((item,index)=>{

table.innerHTML += `
<tr>
<td>${index+1}</td>
<td>${item.nama}</td>
<td>${item.nim}</td>
<td>${item.layanan}</td>
<td>${item.keterangan}</td>
</tr>
`;

});

}