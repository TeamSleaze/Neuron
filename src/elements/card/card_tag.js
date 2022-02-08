const tags = document.getElementsByClassName('card-tag');

for (let i = 0; i < tags.length; i++) {
    const tag = tags[i];
    const text = tag.getAttribute('text');
    const color = tag.getAttribute('color');

    tag.style.backgroundColor = color;
}