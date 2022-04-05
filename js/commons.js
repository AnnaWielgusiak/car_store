/**
 * @param {HTMLElement} element
 */
const isHidden = element => element.style.display === 'none';
/**
 * @param {HTMLElement} element
 */
const isShown = element => element.style.display === 'block';

/**
 * @param {HTMLElement} element
 */
const hide = (element) => {
  if (!isHidden(element)) {
    element.style.display = 'none';
  }
};

/**
 * @param {HTMLElement} element
 */
const show = (element) => {
  if (!isShown(element)) {
    element.style.display = 'block';
  }
};

/**
 * Toggles between values 'none' and 'block' of the provided elements style.display parameter
 *
 * @param {HTMLElement} element to toggle visibility of
 */
const toggleVisibility = (element) => {
  if (isHidden(element)) {
    show(element);
  } else if (isShown(element)) {
    hide(element);
  }
};