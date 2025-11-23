function sendAgent(){
  const f=document.getElementById('agentForm');
  const name=f.name.value;
  const phone=f.phone.value;
  const city=f.city.value;
  const msg=`Хочу стать агентом. Имя: ${name}, Тел: ${phone}, Город: ${city}`;
  window.location=`https://wa.me/77052606667?text=${encodeURIComponent(msg)}`;
}
