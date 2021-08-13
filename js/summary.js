console.log('from uganda  u r most welcome');

const blogs = document.getElementsByTagName('p');
// console.log(blogs);
for(const blog of blogs){
    // console.log(blog);
    blog.style.backgroundColor = 'magenta';
    blog.style.color = 'white';
}

const debitis = document.getElementById('special-blog');
// debitis.innerText = 'New Debitis';
debitis.innerHTML = `
    <h4>Special inner html</h4>
    <div>
        <ul>
           <li>chatar matha</li>
           <li>ghorar dim</li>
        </ul>
    </div>
`

const friends = document.getElementById('friends');
// console.log(friends.children);
const fifth = friends.children[4];
console.log(fifth);
friends.removeChild(fifth);

// create element

const friend = document.createElement('li');
friend.innerText = 'Friend-11';
friends.appendChild(friend);