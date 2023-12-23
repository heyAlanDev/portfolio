import type { Images } from '@lib/projects'

export async function getImage (image: string): Promise<Images> {
  let images: Images = []
  const imgUrl = `https://res.cloudinary.com/doyyvl6jg/image/upload/q_auto/f_webp/projects/${image}-image.png`

  const res = await fetch(imgUrl)
  const imageExist = res.ok

  if (imageExist) {
    images = [
      ...images,
      {
        imgUrl,
        imgAlt: `${image} Image project`
      }
    ]

    return images
  }

  return images
}
