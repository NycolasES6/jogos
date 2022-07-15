

if (window.indexedDB){
  const request = window.indexedDB.open('placar',1)
  request.onsuccess = (event)=>{
    console.log("on Sucess", event)
  }

  request.onupgradeneeded = (event)=>{
    console.log('on Upgraded', event)
  }
}else{
  console.log('não suporta indexeddb')
}