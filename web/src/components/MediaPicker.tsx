'use client'

import { ChangeEvent, useState } from 'react'

export function MediaPicker() {
  const [preview, setPreview] = useState<string | null>(null)
  const [mediaType, setMediaType] = useState<string | null>(null)

  function onFileSelected(event: ChangeEvent<HTMLInputElement>) {
    try {
      const { files } = event.target

      if (!files) {
        return
      }

      const file = files[0]

      const previewURL = window.URL.createObjectURL(file)

      setPreview(previewURL)
      setMediaType(file.type)
    } catch (err) {
      console.log('Image selection has not been completed')
      setPreview(null)
    }
  }
  return (
    <>
      <input
        onChange={onFileSelected}
        name="coverUrl"
        type="file"
        id="media"
        accept="image/*,video/*"
        className="hidden"
      />
      {preview && mediaType && (
        <>
          {mediaType.startsWith('image/') ? (
            // eslint-disable-next-line
            <img
              src={preview}
              alt=""
              className="aspect-video w-full rounded-lg object-cover"
            />
          ) : (
            <video
              src={preview}
              className="aspect-video w-full rounded-lg object-cover"
              controls
            />
          )}
        </>
      )}
    </>
  )
}
