export default function outsideClick(element, evento, callback) {
  const html = document.documentElement;
  const outside = "data-outside";

  if (!element.hasAttribute(outside)) {
    setTimeout(() => html.addEventListener(evento, handleOutsideClick));
    element.setAttribute(outside, "");
  }

  function handleOutsideClick(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(outside);
      html.removeEventListener(evento, handleOutsideClick);
      callback();
    }
  }
}
