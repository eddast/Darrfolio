import { ImageTextSlice } from 'components'
import { JellyScroll } from 'components/jellyScroll/jellyScroll'
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
  <>
    <div>
      {/* sorry með jelly scrollið, var inspired lel */}
      <JellyScroll maxSkew={1}>
        <Container>
          {/*
           * Þetta er sjúklega prismic specific component
           * Þetta mappar bara slices/byggingaeiningunum úr Prismic í componentana sem þeir sýna
           * Þannig verður hægt að raða slices í Prismic eins og maður vill og hægt að extenda og gera fleiri
           * og fleira neat
           */}
          <PrismicSliceZone
            mapper={{
              image_text_section: withWrapperBox(ImageTextSlice),
            }}
            slices={page.data?.body || []}
          />
        </Container>
        <Container>
          <Text>
            <Box py={20} bg="primary200">
              padding á y-ás (uppi og niðri) (20 er c.a. 160px)
            </Box>
          </Text>
          <Box px={20} bg="primary500" my={10}>
            <Text color="white">
              padding á x-ás (til hliðanna) er 20 sem er c.a. 150px margin-y er
              10 þess vegna er speis á milli
            </Text>
          </Box>
        </Container>
      </JellyScroll>
    </div>
  </>
)

/*
 * Hér nota ég with layout sem er heimasmíðað dæmi sem þú getur kíkt á í layout.tsx
 * Þetta er bara svo að þessi screen hafi aðgengi að layoutinu
 * Þ.e. header og footer
 **/
export const Home = withLayout(HomePage)
