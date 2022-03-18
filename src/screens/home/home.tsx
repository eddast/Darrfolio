import { ImageTextSlice } from 'components'
import { JellyScroll } from 'components/jellyScroll/jellyScroll'
import { PageIntro } from 'components/pageIntro/pageIntro'
import { LayoutScreen, withLayout } from 'layouts'
import { withWrapperBox } from 'layouts/wrappers'
import { Home as Page } from 'types'
import { Box, Container, PrismicSliceZone, Text } from 'ui/core'

interface Props {
  page: Page
}

/**
 * Homepage extendar layout screen sem þýðir bara að hann á að vera enwrapped í layoutinu, þ.e. hafa haus og fót
 */
const HomePage: LayoutScreen<Props> = ({ page }) => (
  <Box>
    {/* sorry með jelly scrollið, var inspired lel */}
    <JellyScroll maxSkew={1}>
      <Container>
        <PageIntro
          title={page.data.hero_title}
          secondaryTitle={page.data.hero_title_secondary}
          text={page.data.hero_text}
          image={page.data.hero_image}
        />
      </Container>
      <Container>
        {/*
         * Þetta er sjúklega prismic specific component
         * Þetta mappar bara slices/byggingaeiningunum úr Prismic í componentana sem þeir sýna
         * Þannig verður hægt að raða slices í Prismic eins og maður vill og hægt að extenda og gera fleiri
         * og fleira neat
         */}
        <PrismicSliceZone
          mapper={{
            image_and_text_panel: withWrapperBox(ImageTextSlice),
          }}
          slices={page.data?.body || []}
        />
      </Container>
    </JellyScroll>
  </Box>
)

/*
 * Hér nota ég with layout sem er heimasmíðað dæmi sem þú getur kíkt á í layout.tsx
 * Þetta er bara svo að þessi screen hafi aðgengi að layoutinu
 * Þ.e. header og footer
 **/
export const Home = withLayout(HomePage)
