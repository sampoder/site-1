import React from 'react'
import {
  Box,
  Heading,
  Container,
  Text,
  Flex,
  Module,
  Button,
  BackgroundImage,
  Link as A
} from '@hackclub/design-system'
import Link from 'gatsby-link'
import Stat from 'components/Stat'
import { stats } from 'data.json'

const Grid = Box.extend`
  display: grid;
  grid-gap: ${props => props.theme.space[3]}px;
  width: 100%;

  > div,
  > img {
    width: 100%;
    box-shadow: ${props => props.theme.boxShadows[3]};
    border-radius: ${props => props.theme.radius};
    max-width: 100%;
  }

  ${props => props.theme.mediaQueries.md} {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: ${props => props.theme.space[4]}px;
  }
`

const Super = Box.extend`
  background: ${props => props.theme.colors.warning} url(/diagonal.svg) top
    center repeat-x;
  background-size: auto 100%;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url(/diagonal.svg) top right repeat-x;
    background-size: auto 100%;
    background-position-x: 32%;
  }

  > * {
    position: relative;
  }
`

const Graph = Box.extend`
  background: ${props => props.theme.colors.accent} url(/graph.svg) no-repeat;
  background-size: 100% 100%;
`

const Modules = Box.extend`
  display: grid;
  grid-gap: ${props => props.theme.space[3]}px;
  ${props => props.theme.mediaQueries.md} {
    grid-template-columns: repeat(2, 1fr);
  }
  div {
    align-items: flex-start;
    padding: 0;
    text-align: left;
    width: 100% !important;
  }
`

const Stats = Box.extend`
  column-count: 2;
  div {
    text-align: left;
  }
`

const Like = A.extend.attrs({
  underline: true,
  color: 'white',
  target: '_blank'
})``

const Photo = BackgroundImage.extend.attrs({ role: 'img' })`
  transition: all 0.125s ease-out;
  background-size: auto 100%;
  object-fit: cover;
  &:hover {
    background-size: auto 108%;
  }
`

Button.link = Button.withComponent(Link)

export default () => (
  <Container w={1} px={[3, 4]} mt={[4, 5]}>
    <Container maxWidth={48} mx={0}>
      <Heading.h2 f={[4, 5]} mb={3} bold>
        Join the largest community of students building the class they wish they
        could take.
      </Heading.h2>
      <Text f={[3, 4]}>
        Every week, you and 20 other students come together to build. Meetings
        are like mini-hackathons. People are working on projects, you lead
        workshops to introduce new technologies, you and your co-leads are
        constantly mentoring. Your members typically start with no experience.
      </Text>
    </Container>
    <Grid mt={4} mb={[4, 6]} color="white">
      <Box bg="primary" p={[3, 4]}>
        <Heading.h2 f={4} my={0} caps>
          So much more than a club
        </Heading.h2>
        <Text f={3} my={3}>
          Hack Clubs attend and run hackathons like{' '}
          <Like href="https://www.sfchronicle.com/bayarea/article/Hack-the-Fog-makes-history-as-San-12729895.php">
            Hack the Fog
          </Like>. They run summer programs like{' '}
          <Like href="http://thecspn.com/?p=43434">Hack Camp</Like>. They
          compete in competitions like the{' '}
          <Like href="http://www.congressionalappchallenge.us">
            Congressional App Challenge
          </Like>. This is no ordinary club.
        </Text>
        <Button.link to="/meetings" inverted>
          Learn more »
        </Button.link>
      </Box>
      <Photo image="/about_working.jpg" />
      <Photo image="/about_group.jpg" />
      <Box bg="info" p={[3, 4]}>
        <Heading.h2 f={4} my={0} caps>
          The power of a network
        </Heading.h2>
        <Modules my={3} w={1}>
          <Module
            icon="forum"
            heading="Online community"
            body="Talk to thousands of club leaders/members on Slack."
          />
          <Module
            icon="chrome_reader_mode"
            heading="Curriculum"
            body="Dozens of tutorials for your members to make projects."
          />
          <Module
            icon="voice_chat"
            heading="Mentorship"
            body="Talk to our team online for guidance anytime."
          />
          <Module
            icon="wallpaper"
            heading="Marketing"
            body="Get materials and ideas for spreading your club."
          />
        </Modules>
      </Box>
    </Grid>
    <Container maxWidth={48} mx={0} mt={[4, 5]} mb={4}>
      <Heading.h2 f={[4, 5]} mb={3} bold>
        We think people learn best when they take control of their own
        education.
      </Heading.h2>
      <Text f={[3, 4]}>
        We believe in a world where every young person is empowered to be the
        change they want to see in the world. By offering free computer science
        clubs in high schools, we’re bringing this vision to students around the
        world.
        <br />At Hack Club, there are no teachers or lectures. Your job as a
        club leader is to facilitate and provide guidance through mentoring and
        the power of community. Hack Club is heavily inspired by unschooling.
      </Text>
    </Container>
    <Grid mt={4} mb={[4, 6]} color="white">
      <Super p={[3, 4]}>
        <Heading.h2 f={4} my={0} caps>
          Coding is a superpower
        </Heading.h2>
        <Text f={3} my={3}>
          Learning to code is uniquely empowering: you go from a consumer to a
          creator. The goal of Hack Club is to help you become that creator. We
          want a space for hacking at every high school, every week.
        </Text>
        <Button.link to="/philosophy" bg="warning" inverted>
          Our philosophy »
        </Button.link>
      </Super>
      <Photo image="/about_talking.jpg" />
      <Photo image="/about_hacking.jpg" />
      <Graph p={[3, 4]}>
        <Heading.h2 f={4} my={0} caps>
          Be part of the movement
        </Heading.h2>
        <Stats mb={2}>
          <Stat f={7} value={stats.school_count} label="schools" />
          <Stat f={7} value={stats.country_count} label="countries" />
          <Stat f={7} value={stats.state_count} label="states" />
          <Stat f={7} value={stats.approximate_members} label="members" />
        </Stats>
        <Button.link to="/team" bg="accent" inverted>
          Our team »
        </Button.link>
      </Graph>
    </Grid>
  </Container>
)
