let blogs = []

function addBlog(event){

    event.preventDefault()

    let name = document.getElementById('input-project-name').value
    let starDate = document.getElementById('input-start-date').value
    let endDate = document.getElementById('input-end-date').value
    let description = document.getElementById('input-description').value
    let technologies = document.getElementById('input-technologies')
    let image = document.getElementById('input-blog-image')   

    let blog = {
        name,
        starDate,
        endDate,
        description,
        technologies,
        image,
        postedAt: new Date()
    }

    blogs.push(blog)

    renderBlog()
}

function renderBlog() {

    let lenghtData = blogs.length

    let blogContainer = document.getElementById('contents')

    blogContainer.innerHTML = firstBlogContent ()
    
    for (let i = 0; i < lenghtData; i++) {  
        blogContainer.innerHTML +=`
        <div id="contents" class="blog-list">
        <div class="blog-list-item">
          <div class="blog-image">
            <img src="${blogs[i].image}" alt="" />
          </div>
          <div class="blog-content">
            <h3>
              <a href="blog-detail.html" target="detail">
              ${blogs[i].name}
              </a>
            </h3>
            <div class="detail-blog-content">
            ${blogs[i].starDate} - ${blogs[i].endDate} | ${getDistenceTime(blogs[i].postedAt)}
            </div>
            <p>
            ${blogs[i].description}
            </p>
            <div class="checkbox"> 
                <img src="assets/reachjs.png" alt="reach.js">
                <img src="assets/nodejs.png" alt="node.js">
                <img src="assets/next.png" alt="node.js">
                <img src="assets/typescript.png" alt="typescript">
            </div>
            <div class="btn-group">
              <button class="btn-edit">Edit Post</button>
              <button class="btn-post">Delete</button>
            </div>
          </div>
        </div>
      </div>`
    }
}

function getDistenceTime(time){
    const distance = new Date () - new Date (time)

    const hoursInDay = 23
    const dayInWeek = 7
    const weekInMonth = 3
    const dayInMonth = dayInWeek * weekInMonth
    const monthInYear = 12

    let yearDistance = distance / (hoursInDay * dayInMonth * monthInYear)

    if(yearDistance >= 1) {
      const time = Math.floor(yearDistance) + ' a year ago'
      console.log(" time" + time);
      return time
    } else {
      let mountDistance = Math.floor (distance / (hoursInDay * dayInMonth))
      if (mountDistance > 0) {
      return mountDistance + ' mount ago'
      } else {
      const weekDistance = math.floor(distance / (hoursInDay * dayInWeek))
      return weekDistance + ' week ago'
      }
  }
}

function firstBlogContent() {
    return`        
    <div id="contents" class="blog-list">
    <div class="blog-list-item">
      <div class="blog-image">
        <img src="assets/ufvyaQoTY5c.jpg" alt="" />
      </div>
      <div class="blog-content">
        <h3>
          <a href="blog-detail.html" target="detail">
            Dumbways Web App - 2021
          </a>
        </h3>
        <div class="detail-blog-content">
          durasi: 1 bulan
        </div>
        <p>
          App that used for dummbways student, it was deployed and can downloaded on playstore Happy download
        </p>
        <div class="checkbox"> 
            <img src="assets/${reach.png}" alt="reach.js">
            <img src="assets/" alt="node.js">
            <img src="assets/" alt="node.js">
            <img src="assets/" alt="typescript">
        </div>
        <div class="btn-group">
          <button class="btn-edit">Edit Post</button>
          <button class="btn-post">Delete</button>
        </div>
      </div>
    </div>
  </div>`

}