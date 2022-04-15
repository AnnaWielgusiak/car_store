const isHidden = element => element.style.display === 'none';

const isShown = element => element.style.display === 'block';

const hide = (element) => {
  if (!isHidden(element)) {
    element.style.display = 'none';
  }
};

const show = (element) => {
  if (!isShown(element)) {
    element.style.display = 'block';
  }
};

const toggleVisibility = (element) => {
  if (isHidden(element)) {
    show(element);
  } else if (isShown(element)) {
    hide(element);
  }
};

