import { Component } from '@angular/core';
import { Router } from '@angular/router';

const sampleData: { title: string, content?: string, imageUrl?: string }[] = [
  { title: 'Título 1', content: 'Lorem ipsum dolor sit amet consectetur adipiscing elit cursus turpis, nam proin id vivamus non facilisi venenatis nostra. Lobortis cum montes suspendisse iaculis rutrum etiam aptent tellus blandit dui habitant, justo pellentesque sociis ante accumsan primis aenean cubilia semper. Mus vulputate dictumst est odio mattis eros hac sem tristique torquent praesent, parturient quam ornare natoque sapien purus cras ad eu. Molestie eleifend risus curae nulla urna congue vehicula posuere senectus porta, a dictum platea hendrerit laoreet ridiculus enim sodales mi tortor, suscipit vitae facilisis magna maecenas tempor convallis libero conubia. Fermentum aliquam ultrices diam viverra potenti nibh lacus eget quisque augue, integer luctus sed auctor erat leo massa nec sagittis, consequat arcu class quis at tempus per feugiat litora. Curabitur fringilla dapibus fusce ullamcorper dignissim penatibus malesuada dis, volutpat nisi vestibulum nisl pulvinar varius rhoncus velit, ligula donec interdum faucibus egestas taciti fames. Orci pretium gravida placerat pharetra habitasse, sociosqu phasellus lectus et nunc elementum, morbi metus magnis aliquet. Condimentum neque vel mauris ut duis euismod himenaeos sollicitudin inceptos ac nullam ultricies imperdiet, porttitor mollis netus commodo nascetur bibendum in lacinia tincidunt scelerisque felis. Erat et eleifend aliquam platea vulputate curabitur aptent praesent, velit lacinia ad egestas ultrices montes varius.', imageUrl: '/assets/avatar-01.jpg' },
  { title: 'Título 2', content: 'Conteúdo 2', imageUrl: '/assets/imgQuebrada.jpg' },
  { title: 'Título 3', content: 'Conteúdo 3', imageUrl: '/assets/avatar-03.jpg' },
  { title: 'Título 4', content: 'Conteúdo 4', imageUrl: '/assets/avatar-04.jpg' },
  { title: 'Título 5', content: 'Conteúdo 5', imageUrl: '/assets/avatar-05.jpg' },
  { title: 'Título 6', content: 'Conteúdo 5', imageUrl: '/assets/avatar-06.jpg' },
  { title: 'Título 7', content: 'Conteúdo 5', imageUrl: '/assets/avatar-07.jpg' },
  { title: 'Título 8', content: 'Conteúdo 5', imageUrl: '/assets/avatar-08.jpg' },
];

@Component({
  selector: 'app-example-timeline',
  templateUrl: './example-timeline.component.html',
  styleUrls: ['./example-timeline.component.scss']
})
export class ExampleTimelineComponent {
  alternate = false;
  inverse = false;
  hasImage = false;
  items = sampleData;

  constructor(router: Router) {
    if (router.getCurrentNavigation()) {
      const finalTree = router.getCurrentNavigation().finalUrl;
      if (finalTree) {
        this.inverse = Boolean(finalTree.queryParams.inverse === 'true');
        this.alternate = Boolean(finalTree.queryParams.alternate === 'true');
        this.hasImage = Boolean(finalTree.queryParams.hasImage === 'true');
      }
    }
  }
}
