import Image from 'next/image'
const config = {
  logo: (
    <span
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
      }}
    >
      <Image
        src="/DSA.png"
        width={32}
        height={32}
        alt="DSA Handbook"
      />

      <span>Developer Interview Prep Handbook</span>
    </span>
  ),
  project: {
    link: 'https://github.com/ayushAB/dsa-handbook'
  },
  docsRepositoryBase:
    'https://github.com/ayushAB/dsa-handbook',
  footer: {
    text: 'DSA Handbook'
  }
}

export default config