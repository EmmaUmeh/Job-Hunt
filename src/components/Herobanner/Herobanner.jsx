import ExploreButton from "../Button/ExploreButton"
import Search from "../Search/Search"
import { Container, Flex, HeroHeadingOne, HeroHeadingTwo, HeadingTags, ParagraphContainer, Heroparagraph, Searchspan, SearchContainer } from "./Herostyles"

export default function Herobanner() {
    return(
        <>
        <Container>
            <Flex>
              <HeadingTags>
                <HeroHeadingOne>
                        A spot for creatives to <span className="getnone">get a job</span>
                    </HeroHeadingOne>
                    <HeroHeadingTwo>
                         get a job
                    </HeroHeadingTwo>
              </HeadingTags>

              <ParagraphContainer>
                <Heroparagraph>
                    Get your dream job, with offers from different countries and job positions. Apply today to get internships, fresher, work-from-home jobs.
                </Heroparagraph>
              </ParagraphContainer>

             <SearchContainer>
                <Search />
              <ExploreButton />
             </SearchContainer> 
            
            </Flex>
            <Searchspan>
                *Find the position and location to work
                </Searchspan>
        </Container>
        </>
    )
}