import Post from './Post';



const author={
  name: 'Anakin skywalker',
  nickname: '@dart_vader',
  content: 'WTF? Who is Ray? Why she is Skywalker? Luke...?',
  date: '26 февр.',
  photo : 'https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg',
  picture : 'https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale'
}

function Posts() {
  return (
    <Post
      name = { author.name }
      nickname = { author.nickname }
      content = { author.content }
      date = { author.date }
      photo = { author.photo }
      picture = { author.picture }
      />
      
  );
}

export default Posts;