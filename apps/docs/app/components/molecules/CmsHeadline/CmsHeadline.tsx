import { storyblokEditable } from '@storyblok/react';
import { Headline } from 'ui';

const CmsHeadline = ({ blok }) => {
  // console.log('blok', blok);
  return (
    <Headline tag={blok.tag} size={blok.size} id={blok.id} {...storyblokEditable(blok)}>
      {blok.label}
    </Headline>
  );
};

export default CmsHeadline;
