import React from 'react'
import styled from 'styled-components'
import {
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  Link as A,
  Text,
  theme
} from '@hackclub/design-system'
import { Headline, Lead } from 'components/Content'

const Base = styled(Box.section).attrs({ bg: 'dark', color: 'gray.3' })``

const Modules = styled(Container)`
  display: grid;
  grid-gap: ${theme.space[3]}px;
  ${theme.mediaQueries.md} {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: ${theme.space[5]}px ${theme.space[4]}px;
    > div:first-child {
      grid-column: span 3;
    }
  }
`
Modules.defaultProps = {
  px: 3,
  mt: [4, null, 3],
  mb: 3,
  mx: 'auto',
  maxWidth: 72
}

const Module = ({ icon, name, body, ...props }) => (
  <Flex align="start" {...props}>
    <Icon
      size={48}
      mr={3}
      glyph={icon}
      color="primary"
      style={{ flexShrink: 0 }}
    />
    <Box>
      <Heading.h3 color="snow" fontSize={3} mb={1} children={name} />
      <Text
        color="muted"
        fontSize={2}
        style={{ lineHeight: '1.375' }}
        children={body}
      />
    </Box>
  </Flex>
)

const ModuleDetails = styled(Box).attrs({
  bg: '#252429',
  color: 'smoke',
  mt: 2,
  ml: 3,
  py: 3,
  px: 2
})`
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.0625);
  border-radius: ${theme.radii[2]};
  ul {
    padding: 0;
    list-style: none;
  }
  li + li {
    margin-top: ${theme.space[2]}px;
  }
`

const ModuleDetailsDocument = styled(Flex.withComponent('li'))``

const Document = ({ name, cost }) => (
  <ModuleDetailsDocument align={cost ? 'start' : 'center'}>
    <Icon
      size={28}
      mr={1}
      glyph="payment"
      color="success"
      style={{ flexShrink: 0 }}
    />
    <Box>
      <Text fontSize={2} children={name} />
      {cost && (
        <Text
          fontSize={1}
          color="muted"
          style={{ lineHeight: '1.375' }}
          children={cost}
        />
      )}
    </Box>
  </ModuleDetailsDocument>
)

const Laptop = styled.div`
  width: 100%;
  height: 100%;
  background-size: auto 115%;
  background-image: url('/bank/mac.png');
  background-position: center top;
  background-repeat: no-repeat;
  ${theme.mediaQueries.md} {
    grid-row: span 2;
    grid-column: span 2;
  }
`

export default () => (
  <Base pt={[5, 6, 7]} pb={[4, 5, 6]} color="snow">
    <Modules px={3}>
      <Box>
        <Headline>A full-stack toolkit for organizing events.</Headline>
        <Lead fontSize={[3, 4]} color="muted" maxWidth={48} mx={0}>
          Invoice sponsors, issue debit cards to your team, and view history.
          <br />
          Ongoing support so you can focus on your event, not the paperwork.
        </Lead>
      </Box>

      <Module
        icon="support"
        name="Mentorship"
        body="Every participant will be receiving their very own industry expert mentor to support them every step of the way."
      />
      
      <Module
        icon="help"
        name="Resources"
        body="Need something to make your project possible? Let us know on your application and we'll do our best to get it for you. You can also ping us at any time to ask."
      />
      <Module
        icon="payment"
        name="Built-in invoicing"
        body="Accept sponsor payments with low negotiated rates from Stripe."
      />
      <Module
        icon="docs"
        name="Pre-written forms"
        body="Download liability + photo forms custom written by expert lawyers."
      />
      <Module
        icon="shirt"
        name="Swag"
        body="Need to ask about this will be given to those who complete."
      />
      <Module
        icon="mention"
        name="Priority Support"
        body="Our dedicated team of amazing people will always be there to support you! We'll have a private channel on Slack for communication."
      />
      
    </Modules>

    <Lead maxWidth={28} color="slate" fontSize={3} align="center" mt={[4, 5]}>
      Have more questions?
      <br />
      Check out the{' '}
      <A
        href="https://bank.hackclub.com/faq"
        target="_blank"
        color="primary"
        hoverline
      >
        Hack Club Bank FAQ
      </A>
      .
    </Lead>
  </Base>
)