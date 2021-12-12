import React from 'react'
import styles from './Post.module.css'



export default function Post(props) {
  const { name, nickname, content, date, comment, retweet, likes, photo, picture } = props;
  return (
    <div className = { styles.container }>
      <img className = { styles.photo } src={ photo } alt="#" />
      <div className = { styles.box }>
        <div className = { styles.header }>
          <div className = { styles.info }>
            <p className = { styles.name }>{ name }</p>
            <p className = { styles.nickname }>{ nickname }</p>
            <p className = { styles.date }>· { date }</p>
          </div>
          <div className = { styles.content }>{ content }</div>
        </div>
        <img className = { styles.picture } src={picture} alt="#" />
      </div>
    </div>
  )
}
