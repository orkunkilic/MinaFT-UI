import { NFTStorage, File } from 'nft.storage'
import { getFilesFromPath } from 'files-from-path'

// should be in backend, but just testing in hurry
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDQxMmQyMjA3QWEyQUM3ZDVCMjExOTMyOGNjOTRBNDFjMjlCY0FEMmIiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY1MDc2NDkxNDE4OSwibmFtZSI6ImFtc3RlcmRhbSJ9.Xrv36vAkR7jf76-GJqfml-crIduARb23JvkwObkyejU'

async function main() {
  const path = process.argv.slice(2)
  const files = await getFilesFromPath(path)

  const storage = new NFTStorage({ token })

  console.log(`storing ${files.length} file(s) from ${path}`)
  const cid = await storage.storeDirectory(files, {
      pathPrefix: path, // see the note about pathPrefix below
      hidden: false // use the default of false if you want to ignore files that start with '.'
  })
  console.log({ cid })

  const status = await storage.status(cid)
  console.log(status)
}
main()