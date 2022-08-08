import React from 'react';
import {useRouter} from 'next/router'

const Slug = () => {
    const router= useRouter()
    const {slug} = router.query;

  return (
    <div >
      <style jsx>
{
  `
  .cont{
    width:60%;
    margin:auto;
    justify-content:center;
  }
  `
}
      </style>
      <div className='cont'>
      <h2>this is blog for {slug}</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat praesentium repellat quae blanditiis enim molestias. Voluptates officiis itaque quibusdam pariatur laborum nostrum, veritatis commodi et dicta? Assumenda nemo provident asperiores. Nesciunt iusto officiis sed reprehenderit perferendis molestiae facilis quis aperiam, voluptate illo quo error? Qui, nihil perspiciatis. Molestias facere quidem magnam ullam aperiam laudantium harum maiores corporis a deleniti in earum, reiciendis ipsam repudiandae, odio vero?</p>
    </div></div>
  )
}

export default Slug
