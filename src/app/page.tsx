
import styles from './page.module.css'
// internal components
import Layout from '@/components/Layout/Layout'
import SoundCloudPlayer from '@/components/SoundCloudPlayer/SoundCloudPlayer'

export default function Home() {
  return (
    <>
    {/* <Nav /> */}
    <Layout>
         Home Page sdfads
         <SoundCloudPlayer />
    </Layout>  
    {/* <Footer /> */}
    </>
  )
}


/* NOTES FOR MYSELF

layout 
- add fonts, stick a nav bar, etc. 

create a new page/route INSIDE THE APP FOLDER:
- simply add a folder "foldername" and title the file "page.tsx"
- nextjs will know to auto route to this 
-- for sub-routes, create another folder inside the prior folder (in this case, foldername) and call it page.tsx
    -- example: localhost/foldername/subfoldername






*/