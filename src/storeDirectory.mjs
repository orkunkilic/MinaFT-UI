import { NFTStorage, File } from 'nft.storage'
import { getFilesFromPath } from 'files-from-path'

// should be in backend, but just testing in hurry
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDQxMmQyMjA3QWEyQUM3ZDVCMjExOTMyOGNjOTRBNDFjMjlCY0FEMmIiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY1MDc2NDkxNDE4OSwibmFtZSI6ImFtc3RlcmRhbSJ9.Xrv36vAkR7jf76-GJqfml-crIduARb23JvkwObkyejU'

export default async function upload(files) {
  const storage = new NFTStorage({ token })

  const cid = await storage.storeDirectory(files, {
      pathPrefix: 'metadata',
      hidden: false
  })

  //const status = await storage.status(cid)

  return cid
}
