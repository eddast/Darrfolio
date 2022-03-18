import { ImageTextSlice } from 'components'
import { JellyScroll } from 'components/jellyScroll/jellyScroll'
import { PageIntro } from 'components/pageIntro/pageIntro'
import { FunFactsSlice } from 'components/slices/funFacts/funFacts'
import { ImageGridSlice } from 'components/slices/imageGrid/imageGrid'
import { LayoutScreen, withLayout } from 'layouts'
import { withWrapperBox } from 'layouts/wrappers'
import { ContentPage as Page } from 'types'
import { Box, Container, PrismicSliceZone, Text } from 'ui/core'

interface Props {
  page: Page
}

/**
 * Hér er ui fyrir content page sem þú átt að tengja í route tréð
 * svo geturu bara vísað í þennan component
 */
const ContentPage: LayoutScreen<Props> = ({ page }) => (
  <Box pb={20}>
    {/* sorry með jelly scrollið, var inspired lel */}
    <JellyScroll maxSkew={1}>
      <Container>
        <Box>
          <PageIntro
            uid={page.uid || ''}
            title={page.data.title}
            secondaryTitle={page.data.title_secondary}
            text={page.data.hero_text}
            image={page.data.hero_image}
          />
        </Box>
      </Container>
      {/*
       * Þetta er sjúklega prismic specific component
       * Þetta mappar bara slices/byggingaeiningunum úr Prismic í componentana sem þeir sýna
       * Þannig verður hægt að raða slices í Prismic eins og maður vill og hægt að extenda og gera fleiri
       * og fleira neat
       */}
      <PrismicSliceZone
        mapper={{
          image_and_text_panel: withWrapperBox(ImageTextSlice),
          image_grid: ImageGridSlice,
          fun_facts: FunFactsSlice,
        }}
        slices={page.data?.body || []}
      />
    </JellyScroll>
  </Box>
)

/*
 * Hér nota ég with layout sem er heimasmíðað dæmi sem þú getur kíkt á í layout.tsx
 * Þetta er bara svo að þessi screen hafi aðgengi að layoutinu
 * Þ.e. header og footer
 **/
export const Content = withLayout(ContentPage)
