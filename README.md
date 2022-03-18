# What is dis?

Þetta er basic verkefni með besta tæknistakknum sem ég veit.
Við erum að nota:

- Prismic fyrir CMS kerfi
- NextJS sem framework
- Styled System fyrir alla stíla
- Vercel fyrir deployment

Vercel er mjög easy svo það þarf ekkert að pæla í því en fókusinn er að læra betur á NextJS og Styled System aðallega, en gott líka að læra á Prismic ef þú hefur áhuga.

# Skjöl til að fara yfir til að skilja betur verkefnið

Lestu allar þessar skrár, þær eru mikilvægastar að skilja
Þær eru allar með commentum til að útskýra hvernig stuff virkar og hangir saman

- pages/index til að útskýra next
- screens/home og layouts/layout til að útskýra styled system layouting
- ui/core/anchor - hvernig þú skilgreinir og customizear styled system hönnunarkerfið þitt
- ui/core/button - hvernig þú skilgreinir og customizear styled system hönnunarkerfið þitt
- helpers/linkResolver - til að skilja linka og hvernig þú átt að linka á hluti án refresh fyrir fokk snappy effect!

Það eru líka fleiri skrár með kommentum en þessar ættu að covera mest

# Svo hvað áttu að gera

Þetta eru verkefni sem ég útskýri alls ekki beint svo þetta á að vera sjúklega erfitt, vonandi!
Pælingin er að þú lærir stuff með research vinnu og svo auðvitað spyrðu mig lel

1. Búðu til nýjan button variant:

   - Skilgreindu í hönnunarkerfinu nýjan button variant sem er "ghost" variant, þ.e. með hvítan bakgrunn, primary color border og texta
   - þegar maður hoverar hann eiga litirnir að snúast við
   - búðu svo til nýjan route path í pages sem heitir test þannig þegar ég fer á /test þá ætti ég að sjá þennan nýja button!

2. Búðu til component sem lítur svipað og svona út og notaðu í það <Box> componentinn úr styled system og responsive features í því. Þú getur miðað við einhverja componenta sem ég setti hér fyrir til að sjá hvernig það er gert.

3. Búðu til wildcard route fyrir content_pages:
   - Í prismic er eitt document type sem heitir content_page og hvert af þeirri týpu er með uid, unique identifier
   - Ég vil geta búið til nýja page í Prismic sem er t.d. með uid "edda" og þá vil ég sjá þá page þegar ég fer á URI-ið /edda
   - ÞANNIG AÐ - búðu til undir pages wildcard route resolver route sem resolve-ar allar content pages eftir UID
   - Þú þarft að nota fallið getStaticPaths til að segja NextJS hvaða paths eru í boði í verkefninu svo það geti cacheað allt á production og verið sætt og snappy
   - Þú þarft að nota fallið getStaticProps til að sækja props fyrir hverja síðu fyrir sig
   - Lestu NextJS documentation um þetta, en ég skal gefa þér Prismic kóðabúa til að hjálpa því Prismiclærdómur er ekki aðal atriði

## Prismic kóðabútar

#### Að ná í data fyrir síðu eftir UID þess:

`
import Prismic from 'prismic-javascript'
import { Client } from 'helpers'

/_ .... _/

const client = Client()
const contentPage = await client.getByUID(
'content_page',
(ctx.params?.uid as string) || '',
{},
)
`

#### Að ná í alla possible paths á tiltekinni prismic document type (content_page)

Svo returnaru possible paths í þessu formi í fallinu getStaticPaths

`
import Prismic from 'prismic-javascript'

/_ .... _/

const API = await Prismic.getApi(CMS_BASE_URL, {})
const allPages = await API.query(Prismic.Predicates.at('document.type', 'content_page'))
return {
paths: pages.results.map((page) => ({
params: {
uid: page.uid || '',
},
})),
fallback: true,
}
}

`
