import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-sc-slate border-t border-sc-slate-mid py-10 px-4 mt-16">
      <div className="max-w-4xl mx-auto space-y-4 text-sc-muted text-sm leading-relaxed">
        <p>
          This is an unofficial fan site not affiliated with Cloud Imperium Games or
          Star Citizen®. Star Citizen® is a registered trademark of Cloud Imperium
          Rights LLC.
        </p>
        <p>
          Affiliate disclosure: This site uses Star Citizen referral links. Referral code owners may receive an in-game bonus if you sign up. Your rewards are not affected.
        </p>
        <div className="pt-2">
          <Image
            src="/images/made-by-community.png"
            alt="Made by the Star Citizen Community"
            width={120}
            height={40}
            className="opacity-60"
          />
        </div>
      </div>
    </footer>
  )
}
