/* Candado simple del equipo (se verifica en el navegador).
   Guarda solo la huella SHA-256 de "chessia|" + contraseña, nunca el texto.
   Mientras PASS_HASH no esté fijado, nadie puede entrar (falla cerrado). */
(function () {
  var PASS_HASH = '9595bc133c4d123e1a27be158c6ad998384ebddca6e4bfd0aed5d01fa358005e';
  var KEY = 'chessia_equipo';
  async function sha(t) {
    var b = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(t));
    return Array.prototype.map.call(new Uint8Array(b), function (x) { return x.toString(16).padStart(2, '0'); }).join('');
  }
  function isAuthed() {
    try { return PASS_HASH.length === 64 && localStorage.getItem(KEY) === PASS_HASH; } catch (e) { return false; }
  }
  async function login(pw) {
    if (PASS_HASH.length !== 64) return false;
    var h = await sha('chessia|' + pw);
    if (h !== PASS_HASH) return false;
    try { localStorage.setItem(KEY, h); } catch (e) {}
    return true;
  }
  function logout() { try { localStorage.removeItem(KEY); } catch (e) {} }
  /* En las páginas protegidas: oculta todo y manda a la landing si no hay sesión */
  function guard() {
    if (isAuthed()) { document.documentElement.style.visibility = 'visible'; return true; }   // la hoja de estilos la deja oculta: hay que forzar 'visible'
    location.replace('/?acceso=1');
    return false;
  }
  window.ChessiaAuth = { isAuthed: isAuthed, login: login, logout: logout, guard: guard };
})();
