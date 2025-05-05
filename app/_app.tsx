import ScrollToTop from "@/components/scroll-to-top"

export default function App({ Component, pageProps }) {
  return (
    <>
      <ScrollToTop />
      <Component {...pageProps} />
    </>
  )
}
